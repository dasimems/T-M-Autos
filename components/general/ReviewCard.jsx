const ReviewCard = ({review, name, ...props}) => {
    
    return <div className="flex flex-col gap-2 text-lg md:text-xl text-black z-10 relative max-w-[800px] after:w-[50px] after:h-[3px] after:bg-slate-700 py-10 after:rounded-full after:absolute after:left-1/2 after:-translate-x-[50%] after:-top-0" {...props}>
        <p className="font-bold">
          <q>
            {review}
          </q>
        </p>
        <p>
          -{name}
        </p>
      </div>;
}

export default ReviewCard;