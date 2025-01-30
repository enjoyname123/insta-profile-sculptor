export const SkeletonLoader = () => {
  return (
    <div className="max-w-[975px] mx-auto pt-[90px] px-4 animate-fade-in">
      <div className="flex gap-8 md:gap-[100px]">
        <div className="w-[150px] h-[150px] rounded-full skeleton" />
        <div className="flex-1 space-y-4">
          <div className="h-8 w-48 skeleton" />
          <div className="flex gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-6 w-24 skeleton" />
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-4 w-32 skeleton" />
            <div className="h-4 w-64 skeleton" />
            <div className="h-4 w-48 skeleton" />
          </div>
        </div>
      </div>
    </div>
  );
};