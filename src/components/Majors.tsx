import MajorSection from "@/components/MajorSection";
import { database } from "@/utils/db";

async function Majors() {
  const majors = (await database.execute("select * from major")).rows as
    | { major_id: number; major_name: string }[]
    | [];

  return (
    <section>
      {majors.map(({ major_id, major_name }) => (
        // @ts-expect-error Server Component
        <MajorSection key={major_id} id={major_id} name={major_name} />
      ))}
    </section>
  );
}

export default Majors;
