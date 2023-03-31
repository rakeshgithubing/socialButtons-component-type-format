const Button = (props) => {
  //  Write your code here.
  let { content, name } = props;
  return <button className={name}>{content}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button content="Like" name="button-1" />
      <Button content="Comment" name="button-2" />
      <Button content="Share" name="button-3" />
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
