// Data modal
// +1. Заказать звонок
// +++2. Получить консультацию
// 3. Мы получили вашу заявку
// +4. Получить банкротство
// +5. Оставить заявку
// +6. Получить чек-лист

document.addEventListener('DOMContentLoaded', function () {
    var modalButtons = document.querySelectorAll('.open-modal'),
        overlay = document.querySelector('#overlay'),
        closeButtons = document.querySelectorAll('.modal-close');
    var modalElements = document.querySelectorAll('.modal')
    function closeAllModals() {
        modalElements.forEach(
            function (modalElement) {
                modalElement.classList.remove('active');
            }
        )
        overlay.classList.remove('active');
    }
    modalButtons.forEach(
        function (item) {
            item.addEventListener('click',
                function (e) {
                    e.preventDefault();
                    closeAllModals()
                    let modalId = this.getAttribute('data-modal')
                    let modalElement =
                        document.querySelector('.modal[data-modal="' + modalId + '"]');
                    modalElement.classList.add('active');
                    overlay.classList.add('active');
                    document.getElementsByTagName("body")[0].style.overflow = 'hidden';
                }
            )
        }
    )
    closeButtons.forEach(
        function (item) {
            item.addEventListener('click',
                function (e) {
                //    Закрыть все модальные окна
                    closeAllModals()
                    document.getElementsByTagName("body")[0].style.overflow = 'scroll';
                })
        }
    )
});