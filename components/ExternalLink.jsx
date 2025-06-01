export default function ExternalLink({ link, children }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
      {children}
    </a>
  );
}
