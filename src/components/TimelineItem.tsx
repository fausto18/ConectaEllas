type Props = {
  year: string;
  title: string;
  institution: string;
  description: string;
  tags: string[];
  side: "left" | "right";
};

export default function TimelineItem({
  year,
  title,
  institution,
  description,
  tags,
  side,
}: Props) {
  return (
    <div className={`timeline-item ${side}`}>
      <div className="timeline-content">
        <span className="year">{year}</span>
        <h2>{title}</h2>
        <h3>{institution}</h3>
        <p>{description}</p>

        <div className="timeline-tags">
          {tags.map((tag, i) => (
            <span key={i} className="timeline-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
