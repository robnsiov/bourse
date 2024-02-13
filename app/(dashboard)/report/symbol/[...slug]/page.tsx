import Details from "@/components/pages/- details";

// searchParams is here
const Page = ({ params }: { params: { slug: Array<string> } }) => {
  // params.slug[0] => id
  // params.slug[1] => symboleView
  return (
    <>
      <Details id={params.slug[0]} />
    </>
  );
};
export default Page;
