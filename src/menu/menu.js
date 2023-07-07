import './css/stilos.css'
import './js/app'

export default function Menu() {
    return (
        <nav className='menu'>
            <section className='menu__container'>
                <h1 className='menu__logo'>Rafaga__</h1>
                <ul className='menu__links'>
                    <li className='menu__item'>
                        <a href='#' className='menu__link'>Home</a>

                    </li>
                    <li className='menu__item menu__item--show'>
                        <a href='#' className='menu__link'>About <img src="./img/arrow.png" alt='Menus' className='menu__arrow' /></a>

                        <ul className='menu__nesting'>
                            <li className='menu__inside'>
                                <a href='#' className='menu__link menu_link--inside'>About 1</a>
                            </li>
                            <li className='menu__inside'>
                                <a to='#' className='menu__link menu_link--inside'>About 2</a>
                            </li>
                            <li className='menu__inside'>
                                <a href='#' className='menu__link menu_link--inside'>About 3</a>
                            </li>
                        </ul>
                    </li>

                    <li className='menu__item menu__item--show'>
                        <a href='#' className='menu__link'>Projects <img src="./img/arrow.png" alt='Menus' className='menu__arrow' /></a>

                        <ul className='menu__nesting'>
                            <li className='menu__inside'>
                                <a href='#' className='menu__link menu_link--inside'>Porject 1</a>
                            </li>
                            <li className='menu__inside'>
                                <a href='#' className='menu__link menu_link--inside'>Porject 2</a>
                            </li>
                            <li className='menu__inside'>
                                <a href='#' className='menu__link menu_link--inside'>Porject 3</a>
                            </li>
                        </ul>
                    </li>

                    <li className='menu__item'>
                        <a href='#' className='menu__link'>Contact</a>
                    </li>


                </ul>
                <div className='menu__hamburguer'>
                    <img src='./img/menu.png' className='menu__img' alt='menu amburguer' />
                </div>
            </section>

        </nav>
    )
}