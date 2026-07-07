import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Zap } from 'lucide-react';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white text-sm relative z-[55]">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-center gap-3">
        <Zap className="w-3.5 h-3.5 text-blue-200 shrink-0" />
        <p className="text-center">
          <span className="font-medium">Campus Connect is now live at B. K. Birla Night College.</span>
          <span className="text-blue-200 mx-2">•</span>
          <Link to="/book-demo" className="underline underline-offset-2 font-semibold hover:text-blue-100 transition-colors inline-flex items-center gap-1">
            Request early access
            <ArrowRight className="w-3 h-3" />
          </Link>
        </p>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 text-blue-200 hover:text-white transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
