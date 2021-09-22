import React from "react";

import "./components-body-style.css";
export default function Body() {
    return (
        <div className="body-main-div">
            <div className="settings-div">
                <div className="add-new-guest-from-input">
                <div >
                    <span>Поиск: </span><input />
                </div>

                <div >
                    <select>
                        <option>Пришёл(-а)(-о)</option>
                        <option> НЕ! пришёл(-а)(-о)</option>
                    </select>
                </div>
                </div>

                <div className="add-new-guest-from-input">
                    <pre>
                        <div className="title-in-settings">Добавить нового гостья</div>
                        <div>
                            <span>Имя:     </span><input />
                        </div>

                        <div>
                            <span>Фамилия: </span><input />
                        </div>

                        <div>
                            <span>E-mail:  </span><input />
                        </div>

                        <div>
                            <span>Телефон: </span><input />
                        </div>

                        <div>
                            <button>Добавить</button>
                        </div>
                    </pre>
                </div>

                <div className="add-new-guest-from-input">
                    <div>
                        Load data from text
                    </div>
                    <div>
                        <input type='file' />
                    </div>
                </div>

                <div className="add-new-guest-from-input">
                    <div>
                        Load data from database
                    </div>
                    <div>
                    <button>Select database</button>
                    </div>

                </div>

                <div className="add-new-guest-from-input">
                    <div>
                        Save data in database
                    </div>
                    <div>
                        <button>Save data</button>
                    </div>
                </div>

            </div>
            <div className="user-list-div"></div>
        </div>
    )
}