// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//==================MESSAGES==================
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// Searches Chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLocaleLowerCase;
        if (name.indexOf(val) != -1) {
            chat.style.display = '';
        }
        else {
            chat.style.display = 'none'
        }
    })


    // Search chats
    messageSearch.addEventListener('keyup', searchMessage);

    // highlights messages card when messages menu item is clicked
    messagesNotification.addEventListener('click', () => {
        messages.style.boxShadow = '0 0 1rem var(--color-primary)';
        messagesNotification.querySelector('.notification-count').style.display = 'none';
        setTimeout(() => {
            messages.style.boxShadow = 'none';
        }, 2000)
    })

    //THEMES
    const theme = document.querySelector('#theme');
    const themeModel = document.querySelector('.customize-theme');
    const fontSizes = document.querySelectorAll('.choose-size span');
    var root = document.querySelector(':root');
    const colorPalette = document.querySelectorAll('.choose-color span');
    const Bg1 = document.querySelector('.bg-1');
    const Bg2 = document.querySelector('.bg-2');
    const Bg3 = document.querySelector('.bg-3');

    //THEME/DISPAY CUSTOMIZATION

    // opens model
    const openThemeModel = () => {
        themeModel.style.display = 'grid'
    }

    // closes model
    const closeThemeModel = (e) => {
        if (e.target.classList.contains('customize-theme')) {
            themeModel.style.display = 'none'
        }
    }

    //close model
    themeModel.addEventListener('click', closeThemeModel

    theme.addEventListener('click', openThemeModel));




    //===================SIDEBAR===================

    //remove active class from all menu items
    const changeActiveItem = () => {
        manuItems.forEach(item => {
            item.classList.remove('active')
        })
    }

    manuItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.add('active');
            if (item.id != 'notifications') {
                document.querySelector('.notifications-popup').style.display = 'none';
            }
            else {
                document.querySelector('.notifications-popup').style.display = 'block';
                document.querySelector('#notifications .notification-count').style.display = 'none';
            }
        })
    })


    // =====================Fonts========================
    // remove active class from spans or font size selectors
    const removeSizeSlector = () => {
        fontSizes.forEach(size => {
            size.classList.remove('active');
        })

        fontSizes.forEach(size => {


            size.addEventListener('click', () => {
                removeSizeSlector();
                let fontSize;
                size.classList.toggle('active');

                if (size.classList.contains('font-size-1')) {
                    fontSize = '10px';
                    root.style.setProperty('----sticky-top-left', '5.4rem');
                    root.style.setProperty('----sticky-top-right', '5.4rem');
                } else if (size.classList.contains('font-size-2')) {
                    fontSize = '13px';
                    root.style.setProperty('----sticky-top-left', '5.4rem');
                    root.style.setProperty('----sticky-top-right', '-7rem');
                } else if (size.classList.contains('font-size-3')) {
                    fontSize = '16px';
                    root.style.setProperty('----sticky-top-left', '-2rem');
                    root.style.setProperty('----sticky-top-right', '-17rem');
                } else if (size.classList.contains('font-size-4')) {
                    fontSize = '19px';
                    root.style.setProperty('----sticky-top-left', '-5rem');
                    root.style.setProperty('----sticky-top-right', '-25rem');
                } else if (size.classList.contains('font-size-5')) {
                    fontSize = '22px';
                    root.style.setProperty('----sticky-top-left', '-12rem');
                    root.style.setProperty('----sticky-top-right', '-35rem');
                }

                //change font size of the root html element
                document.querySelector('html').style.fontSize = fontSize
            })


        })

        // remove active class from colors
        const changeActivecolorClass = (=> {
            colorPalette.forEach(colorPicker => {
                colorPicker.classList.remove('active');
            })

            // change primary colors 
            colorPalette.forEach(color => {
                color.addEventListener('click', () => {
                    let primary;
                    // remove active class from colors
                    changeActivecolorClass()

                    if (color.classList, contains(color - 1)) {
                        primaryHue = 252;

                    } else if (color.classList.contains(color - 2)) {
                        primaryHue = 52;
                    } else if (color.classList.contains(color - 2)) {
                        primaryHue = 352;
                    } else if (color.classList.contains(color - 2)) {
                        primaryHue = 152;
                    } else if (color.classList.contains(color - 2)) {
                        primaryHue = 202;
                    }
                    color.classList.add('active');
                    root.style.setProperty('--primary-color-hue', primaryHue);
        )
            }
    })



        // theme BACKGROUND values
        let lightColorLightness;
        let whiteColorLightness;
        let darkColorLightness;

        // change background color
        root.style.setProperty('--light-color-lightness', lightColorLightness);
        root.style.setProperty('--white-color-lightness', whiteColorLightness);
        root.style.setProperty('--dark-color-lightness', darkColorLightness);

        Bg1.addEventListener('click', () => {
            // add active class
            Bg2.classList.add('avtive');
            // remove active class from the others
            Bg1.classList.remove('active');
            Bg3.classList.remove('active');
            window.location.reload();
        })

        Bg2.addEventListener('click', () => {
            darkColorLightness = '95%';
            whiteColorLightness = '20%';
            lightColorLightness = '15%';

            // add active class
            Bg2.classList.add('avtive');
            // remove active class from the others
            Bg1.classList.remove('active');
            Bg3.classList.remove('active');
            changeBG();
        });

        Bg2.addEventListener('click', () => {
            darkColorLightness = '95%';
            whiteColorLightness = '10%';
            lightColorLightness = '0%';

            // add active class
            Bg2.classList.add('avtive');
            // remove active class from the others
            Bg1.classList.remove('active');
            Bg3.classList.remove('active');
            changeBG();
        }); 