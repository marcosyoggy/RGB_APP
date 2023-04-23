
const main_red = document.querySelector('.blk_red')
const main_green = document.querySelector('.blk_green')
const main_blue = document.querySelector('.blk_blue')

const btns_block_red = document.querySelector('.plus_minus_1-2_red')
const btns_block_green = document.querySelector('.plus_minus_1-2_gr')
const btns_block_blue = document.querySelector('.plus_minus_3-4_bl')
const btns_block_all = document.querySelector('.plus_minus_3-4_all')

const text_green_in_red = document.querySelector('.r2_green')
const text_blue_in_red = document.querySelector('.r3_blue')

const text_red_in_green = document.querySelector('.gr1_red')
const text_blue_in_green = document.querySelector('.gr3_blue')

const text_red_in_blue = document.querySelector('.bl1_red')
const text_green_in_blue = document.querySelector('.bl2_green')

const text_red_in_all = document.querySelector('.all1')
const text_green_in_all = document.querySelector('.all2')
const text_blue_in_all = document.querySelector('.all3')

const set_values = (() => {
    const add = 25.5
    let init = 0

    const get_add = () => add
    const get_init = (value) => init = value
    const set_add_plus = () => init + add
    const set_add_minus = () => init - add

    return { get_init, set_add_plus, set_add_minus }
})()

const format_attribute = (blk, first, middle, last) => {
    blk.setAttribute('style', `background-color: rgb(${first}, ${middle}, ${last})`)
}

const set_and_update_el_attribute = (el_clicked) => {
    const blk_colored =
        el_clicked.parentElement.
            parentElement.
            firstElementChild
    const paragraph_text =
        el_clicked.parentElement

    let first = paragraph_text.children[0].textContent
    let middle = paragraph_text.children[2].textContent
    let last = paragraph_text.children[4].textContent

    format_attribute(blk_colored, first, middle, last)
}

const set_plus_value = el_text => {
    const { get_init, set_add_plus } = set_values

    if (el_text.textContent === '255') {
        el_text.textContent = 0
        set_and_update_el_attribute(el_text)
        return
    }
    get_init(Number(el_text.textContent))
    el_text.textContent = set_add_plus()
    set_and_update_el_attribute(el_text)

}//end set...plus()

const set_minus_value = el_text => {
    const { get_init, set_add_minus } = set_values

    if (el_text.textContent === '0') {
        el_text.textContent = 255
        set_and_update_el_attribute(el_text)
        return
    }
    get_init(Number(el_text.textContent))
    el_text.textContent = set_add_minus()
    set_and_update_el_attribute(el_text)

}//end set...minus()

const set_plus_all = (red, green, blue) => {
    const { get_init, set_add_plus } = set_values

    if (red.textContent === '255') {
        red.textContent = 0
        green.textContent = 0
        blue.textContent = 0
        set_and_update_el_attribute(red)
        return
    }
    get_init(Number(text_red_in_all.textContent))
    red.textContent = set_add_plus()
    green.textContent = set_add_plus()
    blue.textContent = set_add_plus()
    set_and_update_el_attribute(text_red_in_all)

}//end set...plus()

const set_minus_all = (red, green, blue) => {
    const { get_init, set_add_minus } = set_values

    if (red.textContent === '0') {
        red.textContent = 255
        green.textContent = 255
        blue.textContent = 255
        set_and_update_el_attribute(red)
        return
    }
    get_init(Number(text_red_in_all.textContent))
    red.textContent = set_add_minus()
    green.textContent = set_add_minus()
    blue.textContent = set_add_minus()
    set_and_update_el_attribute(text_red_in_all)

}//end set...minus()

const set_red_block = e => {
    // e.stopPropagation()
    if (e.target.tagName === 'BUTTON') {
        e.target.className === 'btn_plus_gr_1-2'
            ? set_plus_value(text_green_in_red)
            : e.target.className === 'btn_minus_gr_1-2'
                ? set_minus_value(text_green_in_red)
                : e.target.className === 'btn_plus_blue_1-2'
                    ? set_plus_value(text_blue_in_red)
                    : e.target.className === 'btn_minus_blue_1-2'
                        ? set_minus_value(text_blue_in_red)
                        : null

        return
    }//end if
}//end set...()

const set_green_block = e => {
    // e.stopPropagation()
    if (e.target.tagName === 'BUTTON') {
        e.target.className === 'btn_plus_red_1-2'
            ? set_plus_value(text_red_in_green)
            : e.target.className === 'btn_minus_red_1-2'
                ? set_minus_value(text_red_in_green)
                : e.target.className === 'btn_plus_blue_1-2'
                    ? set_plus_value(text_blue_in_green)
                    : e.target.className === 'btn_minus_blue_1-2'
                        ? set_minus_value(text_blue_in_green)
                        : null
        return
    }//end if
}//end set...()

const set_blue_block = e => {
    // e.stopPropagation()
    if (e.target.tagName === 'BUTTON') {
        e.target.className === 'btn_plus_red_3-4'
            ? set_plus_value(text_red_in_blue)
            : e.target.className === 'btn_minus_red_3-4'
                ? set_minus_value(text_red_in_blue)
                : e.target.className === 'btn_plus_gr_3-4'
                    ? set_plus_value(text_green_in_blue)
                    : e.target.className === 'btn_minus_gr_3-4'
                        ? set_minus_value(text_green_in_blue)
                        : null
        return
    }//end if
}//end set...()

const set_all_color_block = e => {
    // e.stopPropagation()
    if (e.target.tagName === 'BUTTON') {
        e.target.className === 'btn_plus_3-4_all'
            ? set_plus_all(text_red_in_all, text_green_in_all, text_blue_in_all)
            : e.target.className === 'btn_minus_3-4_all'
                ? set_minus_all(text_red_in_all, text_green_in_all, text_blue_in_all)
                : null
        return
    }//end if
}//end set...()

btns_block_red.addEventListener('click', set_red_block)
btns_block_green.addEventListener('click', set_green_block)
btns_block_blue.addEventListener('click', set_blue_block)
btns_block_all.addEventListener('click', set_all_color_block)
