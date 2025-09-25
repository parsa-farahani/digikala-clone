
const SearchItemSkeleton = () => {
   return (
      <div className="animate-pulse space-y-4 flex gap-4">
         <div className="size-6 grow-0 shrink-0 bg-neutral-200 rounded-full" />
         <div className="grow-1 max-w-[240px] flex flex-col gap-3">
            <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
            <div className="h-4 bg-neutral-200 rounded"></div>
         </div>
      </div>
   );
};

export default SearchItemSkeleton;
