// add load event
document.addEventListener('DOMContentLoaded', () => {

    // select image container
    let imageContainer = document.querySelector('#dog-image-container');

    // select breed container
    let breedContainer = document.querySelector('#dog-breeds');

    // set images url
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    // set breeds url
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    // set images state
    let imagesState;

    // set breeds state
    let breedsState;

    // fetch imgaes from url
    fetch(imgUrl)
        // convert json to obj
        .then(res => res.json())

        // add images to state
        .then(data => {
            imagesState = data
            // call img render

        })


    setTimeout(() => console.log(imagesState), 5000)


    // fetch breeds from url

        //  convert json to obj

        // add breeds to state

        // call breed render

    // fn: imgRender add images to dom from images state

    // fn: breedRender add breeds to ul, param: breed state

         // create breed li

         // add id for color change


    // add event listener to breed container for li click

        // set target style font color to blue


    // add event listener to drop down selection

        // filter breed state for select value and starts with

        // call breed Render with filered state


})
