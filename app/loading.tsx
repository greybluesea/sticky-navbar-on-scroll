import Container from "@/components/Container";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <main className="space-y-10 p-4 sm:p-6 lg:p-8 pb-8 md:pb-18">
        <Skeleton className="w-full rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden" />
        <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton className="aspect-square rounded-xl" key={index} />
          ))}
        </section>
      </main>
    </Container>
  );
};

export default Loading;
