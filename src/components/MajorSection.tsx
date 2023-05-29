import Link from "next/link";
import { title_font } from "@/utils/font";
import { database } from "@/utils/db";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

type Props = {
  id: number;
  name: string;
};

async function MajorSection({ id, name }: Props) {
  const courses = (
    await database.execute(`select * from course where major_id=${id};`)
  ).rows as { course_id: number; course_name: string; major_id: number }[] | [];

  return (
    <section>
      <h2
        className={`${title_font.className} text-lg font-medium sticky top-0 bg-neutral-100/80 py-4 text-black uppercase`}
      >
        {name}
      </h2>
      {courses ? (
        <div className="grid grid-cols-2 gap-4">
          {courses.map(({ course_id, course_name }, index) => (
            <Link
              href={`/course/${course_id}`}
              key={index}
              className="border-2 border-transparent bg-neutral-200 p-4 hover:border-neutral-300 transition-colors duration-300 flex items-center justify-between"
            >
              <h3>{course_name}</h3>
              <ArrowSmallRightIcon className="h-6 w-6 text-neutral-500" />
            </Link>
          ))}
        </div>
      ) : (
        <p>No disponible</p>
      )}
    </section>
  );
}

export default MajorSection;
