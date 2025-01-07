interface NotFoundProps extends React.HTMLAttributes<HTMLHeadElement> {
  message?: string;
}

function NotFound({ message, ...rest }: NotFoundProps) {
  return (
    <h1 {...rest}>
      {message || "🤔 Sorry, we couldn't find any data to display"}
    </h1>
  );
}

export default NotFound;
