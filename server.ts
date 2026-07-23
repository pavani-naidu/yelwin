import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

// Middleware for parsing JSON and URL-encoded bodies
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Simple in-memory rate limiter for contact form submissions
const submissionIPs = new Map<string, number>();

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'YELWIN API Core',
    timestamp: new Date().toISOString(),
  });
});

// Project Enquiry / Contact Form Submission API
app.post('/api/contact', (req: Request, res: Response) => {
  try {
    const clientIP = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
    const lastSubmission = submissionIPs.get(clientIP);
    const now = Date.now();

    // Rate limit: 1 submission every 15 seconds per IP
    if (lastSubmission && now - lastSubmission < 15000) {
      return res.status(429).json({
        success: false,
        error: 'Please wait a moment before submitting another inquiry.',
      });
    }

    const { fullName, email, company, phone, servicesNeeded, budgetRange, timeline, projectDetails, honeypot } = req.body;

    // Honeypot spam check
    if (honeypot && String(honeypot).trim() !== '') {
      // Quietly reject bot submissions
      return res.status(200).json({ success: true, message: 'Inquiry received.' });
    }

    // Input validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({ success: false, error: 'Please provide a valid full name.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, error: 'Please provide a valid business email address.' });
    }

    if (!projectDetails || typeof projectDetails !== 'string' || projectDetails.trim().length < 10) {
      return res.status(400).json({ success: false, error: 'Please provide brief details about your project vision (at least 10 characters).' });
    }

    // Record rate limit timestamp
    submissionIPs.set(clientIP, now);

    // Cleaned sanitized payload
    const sanitizedInquiry = {
      id: `YELWIN-INQ-${Date.now()}`,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      company: (company || 'N/A').trim(),
      phone: (phone || 'N/A').trim(),
      servicesNeeded: Array.isArray(servicesNeeded) ? servicesNeeded : [],
      budgetRange: budgetRange || 'Flexible',
      timeline: timeline || 'Immediate',
      projectDetails: projectDetails.trim(),
      submittedAt: new Date().toISOString(),
    };

    console.log('[YELWIN SERVER] New Project Enquiry Received:', sanitizedInquiry);

    return res.status(200).json({
      success: true,
      message: 'Thank you for reaching out to YELWIN. Our executive product group will review your inquiry and respond within 24 hours.',
      inquiryId: sanitizedInquiry.id,
    });
  } catch (err: unknown) {
    console.error('[YELWIN SERVER] Contact Submission Error:', err);
    return res.status(500).json({
      success: false,
      error: 'An unexpected internal error occurred. Please try again or contact hello@yelwin.com directly.',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[YELWIN] Core Server active on http://0.0.0.0:${PORT}`);
  });
}

startServer();
