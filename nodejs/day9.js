const buffer1 = Buffer.from("NodeJS is fast");

const slicedBuffer = buffer1.slice(0, 6);

console.log("Sliced Buffer:", slicedBuffer.toString());

const buffer2 = Buffer.from("Powerful");

const result = slicedBuffer.compare(buffer2);

if (result < 0) {
    console.log('"NodeJS" comes first alphabetically');
}
else if (result > 0) {
    console.log('"Powerful" comes first alphabetically');
}
else {
    console.log("Both are equal");
}

const jsonData = slicedBuffer.toJSON();

console.log("JSON Format:", jsonData);