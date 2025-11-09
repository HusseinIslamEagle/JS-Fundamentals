const args = process.argv.slice(2); // تجاهل "node" واسم السكربت

if (args[0] === undefined) {
    console.log("No argument");
} else {
    console.log(args[0]);
}
