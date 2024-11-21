import {
  IconBrandCss3,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNpm,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVite,
} from "@tabler/icons-react";

export default function Stack() {
  return (
    <section className="mx-5% my-14">
      <p className="text-center text-base text-gray-600">Explore My</p>
      <h2 className="text-center text-3xl font-bold pb-3 pt-1">Stack</h2>
      <article className="my-8 flex flex-nowrap max-[600px]:flex-wrap justify-center gap-8">
        <div className="flex mt-0 gap-8">
          <div className="p-6 flex flex-col flex-1 rounded-3xl border-[1px] border-black text-center">
            <h3 className="font-semibold text-gray-600 text-lg text-center mb-8">
              Frontend Development
            </h3>
            <ul className="flex flex-wrap flex-row gap-10 justify-around">
              <li className="text-base flex w-40 items-center gap-2">
                <IconBrandHtml5 stroke={1.5} className="w-8 h-8" />
                <p className="font-semibold text-left">HTML</p>
              </li>
              <li className="text-base flex w-40 items-center gap-2">
                <IconBrandCss3 stroke={1.5} className="w-8 h-8" />
                <p className="font-semibold">CSS</p>
              </li>
              <li className="text-base flex w-40 items-center gap-2">
                <IconBrandJavascript stroke={1.5} className="w-8 h-8" />
                <p className="font-semibold">JavaScript</p>
              </li>
              <li className="text-base flex w-40 items-center gap-2">
                <IconBrandReact stroke={1.5} className="w-8 h-8" />
                <p className="font-semibold">React JS</p>
              </li>
              <li className="text-base flex w-40 items-center gap-2">
                <IconBrandTypescript stroke={1.5} className="w-8 h-8" />
                <p className="font-semibold">TypeScript</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex mt-0 gap-8">
          <div className="p-6 flex flex-col flex-1 rounded-3xl border-[1px] border-black text-center">
            <h3 className="font-semibold text-gray-600 text-lg text-center mb-8">
              Frontend Development
            </h3>
            <ul className="flex flex-wrap flex-row gap-10 justify-around">
              <li className="text-base flex w-40 items-center gap-2">
                <IconBrandTailwind stroke={1.5} className="w-8 h-8" />
                <p className="font-semibold">Tailwind CSS</p>
              </li>
              <li className="text-base flex w-40 items-center gap-2">
                <IconBrandGit stroke={1.5} className="w-8 h-8" />
                <p className="font-semibold">Git</p>
              </li>
              <li className="text-base flex w-40 items-center gap-2">
                <IconBrandGithub stroke={1.5} className="w-8 h-8" />
                <p className="font-semibold">Github</p>
              </li>
              <li className="text-base flex w-40 items-center gap-2">
                <IconBrandVite stroke={1.5} className="w-8 h-8" />
                <p className="font-semibold">Vite</p>
              </li>
              <li className="text-base flex w-40 items-center gap-2">
                <IconBrandNpm stroke={1.5} className="w-8 h-8" />
                <p className="font-semibold">NPM</p>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
