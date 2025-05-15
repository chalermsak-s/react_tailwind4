import ContactList from "@/components/ContactList";

const About = () => {
  return (
    <>
      <h1 className="text-3xl">About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque aut
        deleniti veniam nobis at quos, porro vel veritatis et debitis expedita
        fugit laboriosam in earum sint, necessitatibus nostrum unde molestias.
      </p>
      <ContactList />

      <div className="flex flex-row space-x-4 font-mono text-sm leading-6 font-bold text-white py-5">
        <div className="flex h-14 basis-3xs items-center justify-center rounded-lg bg-purple-500">
          01
        </div>
        <div className="flex h-14 basis-2xs items-center justify-center rounded-lg bg-purple-500">
          02
        </div>
        <div className="flex h-14 basis-xs items-center justify-center rounded-lg bg-purple-500">
          03
        </div>
        <div className="flex h-14 basis-sm items-center justify-center rounded-lg bg-purple-500">
          04
        </div>
      </div>
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img
          className="size-12 shrink-0"
          src="/images/chaticon.svg"
          alt="ChitChat Logo"
        />
        <div>
          <div className="text-xl font-medium text-black dark:text-white">
            ChitChat
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            You have a new message!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
