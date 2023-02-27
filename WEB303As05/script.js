/*
    Assignment 05
    Author's Name: Nihar Rajanikant Sadhu
    Date: 2023-02-26
*/

$("document").ready(function () {

    class ContentItem {

        constructor(id, f_name, description, category_genre) {
            this.id = id;
            this.f_name = f_name;
            this.description = description;
            this.category_genre = category_genre;
        }

        updateContentItem() {

            if (this.id === id) {
                if (f_name) {
                    this.f_name = f_name;
                }
                if (description) {
                    this.description = description;
                }
                if (category_genre) {
                    this.category_genre = category_genre;
                }
            }
        }

        toString() {
            let content = `<div class="content-item-wrapper" id="content-item-id${this.id}">`;
            content += `<h2>${this.f_name}</h2>`;
            content += `<p>${this.description}</p>`;
            content += `<div>${this.category_genre}</div>`;
            content += `</div>`;
            return content;
        }
    }

    let array = [
        new ContentItem(0, 'The Dark Knight', 'A 2008 superhero film directed by Christopher Nolan, based on the DC Comics character Batman.', 'Action'),
        new ContentItem(1, 'Wonder Woman', 'A 2017 superhero film based on the DC Comics character of the same name.', 'Action'),
        new ContentItem(2, 'Aquaman', 'A 2018 superhero film based on the DC Comics character of the same name.', 'Action'),
        new ContentItem(3, 'Man of Steel', 'A 2013 superhero film based on the DC Comics character Superman.', 'Action'),
        new ContentItem(4, 'Shazam!', 'A 2019 superhero film based on the DC Comics character of the same name.', 'Action')
    ];

    for (let i = 0; i < array.length; i++) {
        const cItem = array[i];
        const itemHtml = cItem.toString();
        $("#content-item-list").append(itemHtml);
    }

    $('.content-item-wrapper').css({
        'border': '1px solid #ccc',
        'width': '80%',
        'padding': '20px',
        'margin': '50px auto'
      });      
});


