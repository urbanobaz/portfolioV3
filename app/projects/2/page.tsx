import Container from '@/components/container/Container';

export default function PortfolioPage() {
  return (
    <Container>
      <h2 className="text-2xl font-semibold mb-10">Portfolio</h2>
      <p className="mb-5">
        NextJS project highlighting a little bit more information about myself.
        Uses the new Next 13 app directory. Check out the{' '}
        <a
          href="https://www.urbanobaz.com/"
          className="text-blue-600 hover:font-medium"
        >
          live site
        </a>{' '}
        or the Github{' '}
        <a
          href="https://github.com/urbanobaz/portfolioV3"
          className="text-blue-600 hover:font-medium"
        >
          repository
        </a>
        .
      </p>

      <p>
        <strong className="font-semibold">Technologies Used:</strong> React,
        TypeScript, TailwindCSS, NextJS, MobX, DevExtreme Datagrid
      </p>
    </Container>
  );
}
