function SettingsSidebar() {
    return (
        <div className="fixed br075rem width340 right0 bgWhite sidebarHeight m15 p15 scrollbar colorDark">
            <div className="positionAbsolute clossButton topAndRight0"><span className=' size32 py10'>&times;</span></div>
            <div className="">
                <h5>Настройки внешнего вида</h5>
                <p className="colorGrey">Настроивайте внешный вид по своему вкусу</p>
                <hr className='lightHr my10' />
            </div>
            <div className="">
                <h6>
                    Цвет фона текста
                </h6>
                <ul className="flex">
                    <li><span className="flex m5first changeColorItem color1"></span></li>
                    <li><span className="flex m5 changeColorItem color2"></span></li>
                    <li><span className="flex m5 changeColorItem color3"></span></li>
                    <li><span className="flex m5 changeColorItem color4"></span></li>
                    <li><span className="flex m5 changeColorItem color5"></span></li>
                    <li><span className="flex m5 changeColorItem color6"></span></li>
                </ul>
            </div>      <hr className='lightHr my10' />

            <div className="">
                <h6>Тип меню</h6>
                <ul className="flex colorLight">
                    <li className="m5first br0375rem borderGrey p15 bgDark borderGrey"><span >темный</span></li>
                    <li className="m5 br0375rem borderGrey p15 bgDark borderGrey"><span>прозрачный</span></li>
                    <li className="m5 br0375rem borderGrey p15 bgDark borderGrey"><span>белый</span></li>
                </ul>
                <hr className='lightHr my10' />
               
                <div className="flex between">
                    <h6>
                    прикрепить шапку сверху
                    </h6>
                    <input type="checkbox" className="scale1_5 checkbox" />
                </div>
                <hr className='lightHr my10' />
                <div className="flex between">
                    <div className="">
                    <h6>
                        тема
                    </h6>
                    <span>светлый/темный</span>
                    </div>
                    <input type="checkbox" className="scale1_5 checkbox" />

                </div>
                <hr className='lightHr my10' />
               
            </div>
        </div>
    )
}
export default SettingsSidebar