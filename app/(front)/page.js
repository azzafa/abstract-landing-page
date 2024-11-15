import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="hero bg-secondary-content min-h-80">
        <div className="hero-content text-center">
          <div className="max-w-full">
            <h1 className="flex justify-center text-[75px]">
              How Can We Help?
            </h1>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div className="m-24 place-content-center grid grid-cols-2 gap-32 sm:grid-cols-2">
        <div className="m-4 grid gap-10 grid-cols-4">
          <Image src="/images/img1.jpeg" width={100} height={100} alt="img1" />
          <p className="col-span-3 text-2xl">
            Abstract lets you manage, version, and document your designs in one
            place.
          </p>
          {/* <a className="link">I'm a simple link</a> */}
        </div>
        <div className="m-4 grid gap-10 grid-cols-4">
          <Image src="/images/img2.jpeg" width={100} height={100} alt="img1" />
          <p className="col-span-3 text-2xl">
            Abstract lets you manage, version, and document your designs in one
            place.
          </p>
        </div>
        <div className="m-4 grid gap-10 grid-cols-4">
          <Image src="/images/img3.jpeg" width={100} height={100} alt="img1" />
          <p className="col-span-3 text-2xl">
            Abstract lets you manage, version, and document your designs in one
            place.
          </p>
        </div>
        <div className="m-4 grid gap-10 grid-cols-4">
          <Image src="/images/img4.jpeg" width={100} height={100} alt="img1" />
          <p className="col-span-3 text-2xl">
            Abstract lets you manage, version, and document your designs in one
            place.
          </p>
        </div>
        <div className="m-4 grid gap-10 grid-cols-4">
          <Image src="/images/img5.jpeg" width={100} height={100} alt="img1" />
          <p className="col-span-3 text-2xl">
            Abstract lets you manage, version, and document your designs in one
            place.
          </p>
        </div>
        <div className="m-4 grid gap-10 grid-cols-4">
          <Image src="/images/img6.jpeg" width={100} height={100} alt="img1" />
          <p className="col-span-3 text-2xl">
            Abstract lets you manage, version, and document your designs in one
            place.
          </p>
        </div>
      </div>
    </div>
  );
}
