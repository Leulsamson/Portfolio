import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faDownload,
  faEye,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

export const Credentials = ({ title, subtitle, items = [] }) => {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (!activeItem) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveItem(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItem]);

  return (
    <section id="credentials" className="credentials-section section-pad">
      <div className="container">
        <div className="section-header mb-4">
          <h2 className="section-heading fw-bold mb-2">{title}</h2>
          {subtitle && <p className="section-subtitle mb-0">{subtitle}</p>}
        </div>

        <div className="credentials-grid">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className="credential-card text-start"
              onClick={() => setActiveItem(item)}
            >
              <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                <span className="credential-badge">{item.category}</span>
                {item.icon && (
                  <span className="credential-icon" aria-hidden="true">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                )}
              </div>
              <h3 className="credential-title">{item.title}</h3>
              <p className="credential-meta">{item.meta}</p>
              <p className="credential-desc">{item.description}</p>
              <span className="credential-action mt-auto">
                <FontAwesomeIcon icon={faEye} aria-hidden="true" />
                <span>{item.actionLabel}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeItem && (
        <div
          className="doc-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="doc-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setActiveItem(null);
            }
          }}
        >
          <div className={`doc-modal-dialog ${activeItem.files && activeItem.files.length > 1 ? 'doc-modal-wide' : ''}`}>
            <div className="doc-modal-header">
              <div>
                <span className="credential-badge mb-2 d-inline-block">{activeItem.category}</span>
                <h3 id="doc-modal-title" className="doc-modal-title mb-1">
                  {activeItem.title}
                </h3>
                <p className="doc-modal-meta mb-0">{activeItem.meta}</p>
              </div>
              <button
                type="button"
                className="doc-modal-close"
                onClick={() => setActiveItem(null)}
                aria-label="Close document preview"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <div className="doc-modal-body">
              {activeItem.type === 'images' && activeItem.files && (
                <div
                  className={`doc-images-grid ${
                    activeItem.files.length > 1 ? 'doc-images-two' : 'doc-images-single'
                  }`}
                >
                  {activeItem.files.map((file) => (
                    <figure className="doc-figure mb-0" key={file.src}>
                      <img src={file.src} alt={file.caption} className="doc-preview-image" />
                      <figcaption className="doc-caption">{file.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {activeItem.type === 'pdf' && (
                <div className="doc-pdf-container">
                  {activeItem.summary && (
                    <div className="doc-summary-grid mb-3">
                      {activeItem.summary.map((row) => (
                        <div className="doc-summary-item" key={row.label}>
                          <span className="doc-summary-label">{row.label}</span>
                          <span className="doc-summary-value">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="doc-pdf-frame-wrap">
                    <iframe
                      src={`${activeItem.pdfSrc}#view=FitH`}
                      title={activeItem.title}
                      className="doc-pdf-frame"
                    />
                  </div>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    <a
                      href={activeItem.pdfSrc}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm d-inline-flex align-items-center gap-2"
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      <span>Open Full PDF</span>
                    </a>
                    <a
                      href={activeItem.pdfSrc}
                      download
                      className="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-2"
                    >
                      <FontAwesomeIcon icon={faDownload} />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
