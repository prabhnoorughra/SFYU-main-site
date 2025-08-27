// src/components/Event.jsx
import { useId } from "react";
import PropTypes from "prop-types";

function formatDate(value) {
  const d = value instanceof Date ? value : new Date(value);
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    year: "numeric",
  }).format(d);
}

const goTo = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'start'
  });
};

function Event({ title, date, images = [], paragraphs = [], invert = true }) {
  const uid = useId(); // unique prefix for slide ids
  return (
    <article className="card bg-[#1F80FF] shadow-md">
      <div className="card-body space-y-4">

        <header className="flex flex-col gap-2">
          <h2 className="card-title text-2xl">{title}</h2>
          <time
            dateTime={new Date(date).toISOString()}
            className="badge border-0 bg-[#132F57] text-white"
          >
            {formatDate(date)}
          </time>
        </header>

        {images.length > 0 && (
          <div className="rounded-xl overflow-hidden">
            {images.length > 1 ? (
                <div className="carousel w-full">
                {images.map((src, idx) => {
                    const id = `slide-${uid}-${idx}`;
                    const prev = `slide-${uid}-${(idx - 1 + images.length) % images.length}`;
                    const next = `slide-${uid}-${(idx + 1) % images.length}`;
                    return (
                    <div key={id} id={id} className="carousel-item relative w-full">
                        <img src={src} alt={`${title} — image ${idx + 1}`}
                            className="w-full object-contain aspect-[16/9]" />
                        <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between">
                            <button
                                type="button"
                                className="btn btn-circle"
                                aria-label="Previous slide"
                                onClick={(e) => {
                                    e.preventDefault();
                                    goTo(prev);
                                }}
                                >
                                ❮
                            </button>

                            <button
                                type="button"
                                className="btn btn-circle"
                                aria-label="Next slide"
                                onClick={(e) => {
                                    e.preventDefault();
                                    goTo(next);
                                }}
                                >
                                ❯
                            </button>
                        </div>
                    </div>
                    );
                })}
                </div>
            ) : (
                <img src={images[0]} alt={title}
                    className="w-full object-contain aspect-[16/9]" />
            )}
          </div>
        )}

        <div
          className={[
            "prose max-w-none",
            invert ? "prose-invert" : "",
            "prose-p:leading-relaxed",
            "prose-p:text-slate-900",
            "prose-headings:text-white",
            "prose-strong:text-slate-100",
            "prose-a:text-blue-300 hover:prose-a:text-blue-200",
          ].join(" ")}
        >
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

Event.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  /* Invert is for the background theme, if the background becomes light change it to false */
  invert: PropTypes.bool,
};

export default Event
