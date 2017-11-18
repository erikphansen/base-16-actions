// eslint-disable-next-line
function run(argument) {
  if (argument === undefined) {
    LaunchBar.alert('No argument was passed to the action');
  } else {
    const hexValue = parseInt(argument, 10)
      .toString(16)
      .toUpperCase();
    return [
      {
        title: `0x${hexValue}`
      }
    ];
  }
}
