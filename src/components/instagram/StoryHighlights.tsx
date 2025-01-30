export const StoryHighlights = () => {
  const highlights = [
    { id: 1, title: "Travel", image: "https://picsum.photos/77?1" },
    { id: 2, title: "Food", image: "https://picsum.photos/77?2" },
    { id: 3, title: "Nature", image: "https://picsum.photos/77?3" },
    { id: 4, title: "Work", image: "https://picsum.photos/77?4" },
  ];

  return (
    <div className="py-8 overflow-x-auto">
      <div className="flex gap-4">
        {highlights.map((highlight) => (
          <div key={highlight.id} className="flex flex-col items-center gap-1">
            <div className="story-highlight">
              <div className="story-highlight-inner">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <span className="text-xs">{highlight.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};