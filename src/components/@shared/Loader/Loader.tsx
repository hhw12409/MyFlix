import { Container } from './Loader.styles';

const Loader = ({ children }: { children: string }) => {
  return <Container>{children}</Container>;
};

export default Loader;
