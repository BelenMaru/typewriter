const sentence = "hello there from lighthouse lab \n";

const typeWriter = function(sentence) {
  let delay = 0;
  for (let i = 0; i < sentence.length; i++) {
    const char =  sentence[i];
    setTimeout(() => {
      process.stdout.write(char);
      if (i + 1 === sentence.length) {
        process.stdout.write("\n");
      }
    }, delay);
    delay += 50;
  }
};

