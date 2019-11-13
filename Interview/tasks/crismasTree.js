const generateCharacterSequence = (length, char) => char.repeat(length);

const makeCrismasTree = (height) => {
    const pictureWidth = height * 2 + 1;
    let treeWidth = 1
    for ( let i = 0; i < height; i++, treeWidth += 2 ) {
        let spaceWidth = (pictureWidth - treeWidth)/ 2
        console.log(
            generateCharacterSequence(spaceWidth, " "),
            generateCharacterSequence(treeWidth, "♥"),
        )
    }
}


for ( let i = 1; i < 20; i++) {
    makeCrismasTree(i);
}