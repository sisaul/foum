interface BlogGridProps {
  title: string;
  description?: string;
}

export default function BlogGrid({ title, description }: BlogGridProps) {
  return (
    <div>
      <h3 className="title font-bold mb-2">{title}</h3>
      {description && <p className="body mb-2">{description}</p>}
    </div>
  );
} 