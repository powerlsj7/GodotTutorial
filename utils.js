// scripts.js
function NextPage(pageName,id) {
    // ID�� 'button'�� ��Ҹ� �����ɴϴ�.
    const button = document.getElementById(id);

    // Ŭ�� �̺�Ʈ �����ʸ� �߰��մϴ�.
    button.addEventListener('click', function () {
        window.location.href = pageName;
    });
}
