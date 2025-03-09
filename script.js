const gameTiles = document.querySelectorAll('.game-tile');

gameTiles.forEach(tile => {
    tile.addEventListener('click', () => {
        const gameId = tile.dataset.game;
        let url = ''; // URL của trang web trò chơi

        // Xác định URL dựa trên gameId
        switch (gameId) {
            case 'crossword':
                url = 'crossword.html'; // Tạo file crossword.html
                break;
            case 'picture-quiz':
                url = 'picture-quiz.html'; // Tạo file picture-quiz.html 
                break;
            case 'word-scramble':
                url = 'word-scramble.html'; // Tạo file word-scramble.html
                break;
            case 'empty':
                // Không làm gì cả nếu là ô trống
                return;
            default:
                console.warn('Unknown gameId:', gameId); // Cảnh báo nếu có lỗi
                return;
        }

        // Mở trang web mới trong một tab/cửa sổ mới
        window.open(url, '_blank'); // Mở trong tab mới
        // Hoặc: window.open(url);  // Mở trong cửa sổ mới (tùy thuộc vào cài đặt trình duyệt)
    });
});