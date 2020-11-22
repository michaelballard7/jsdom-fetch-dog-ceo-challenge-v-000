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
    let imagesState = []

    // set breeds state

    // fn: imgRender add images to dom from images state

    // fn: breedRender add breeds to ul, param: breed state

         // create breed li

         // add id for color change

    // fetch imgaes from url

        // convert json to obj

        // add images to state

        // call img render


    // fetch breeds from url

        //  convert json to obj

        // add breeds to state

        // call breed render


    // add event listener to breed container for li click

        // set target style font color to blue


    // add event listener to drop down selection

        // filter breed state for select value and starts with

        // call breed Render with filered state


})
