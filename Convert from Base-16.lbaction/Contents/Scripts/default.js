// eslint-disable-next-line
function run(argument) {
  if (argument === undefined) {
    LaunchBar.alert('No argument was passed to the action');
  } else {
    return [{ title: parseInt(argument, 16).toString() }];
  }
}
