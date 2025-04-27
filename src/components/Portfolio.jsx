function Portfolio() {
  return (
    <div className="flex flex-col items-center">
      <div className="font-aeonik text-primary flex w-auto justify-center rounded-4xl bg-white px-3 font-normal">
        <p> &#9679; Portfolio</p>
      </div>
      <h1 className="text-primary font-aeonik mb-5 py-5 text-4xl font-normal">
        Selected Projects
      </h1>
      <div className="relative mx-10 flex justify-center gap-4">
        <div className="flex h-auto w-full flex-col">
          <div className="group relative flex h-full w-full flex-col">
            <img
              className="h-full w-full rounded-xl object-cover"
              src="./resources/images/guessword.png"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-60">
              <svg
                className="h-10 w-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
              </svg>
            </div>
          </div>
          <p className="font-aeonik text-primary pt-3 font-normal">
            Word Scramble
          </p>
        </div>

        <div className="flex h-auto w-full flex-col">
          <div className="group relative flex h-full w-full flex-col">
            <img
              className="h-full w-full rounded-xl object-cover"
              src="./resources/images/qrcode.png"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-60">
              <svg
                className="h-10 w-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
              </svg>
            </div>
          </div>
          <p className="font-aeonik text-primary pt-3 font-normal">
            QR Code generator
          </p>
        </div>

        <div className="flex h-auto w-full flex-col">
          <div className="group relative flex h-full w-full flex-col">
            <img
              className="h-full rounded-xl object-cover"
              src="./resources/images/careercataylst.png"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-60">
              <svg
                className="h-10 w-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
              </svg>
            </div>
          </div>
          <p className="font-aeonik text-primary pt-3 font-normal">
            Career Catalyst Website
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
