class Curses {
    render() {
        let htmlCurses = '';
        CURSELIST.forEach(({ id, name }) => {
            htmlCurses += `
            <li>
                <span>${name}</span>

            </li> 
            `
        })

        const html = `
        <div class="container">
        <ul>
            ${htmlCurses}
        </ul>

        </div>
        
        `;

        ROOT_CURSES.insertAdjacentHTML('afterbegin', html);

    }
}

const cursesPage = new Curses();
cursesPage.render();