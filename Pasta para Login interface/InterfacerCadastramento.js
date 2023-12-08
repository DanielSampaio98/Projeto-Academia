new Vue({
    el: '.login-form',
    data: {
        user: {
            email: '',
            password: ''
        }
    },
    methods: {
        handleSubmit() {
            // Aqui você pode adicionar a lógica para enviar os dados do usuário para o servidor
            console.log('Dados do usuário:', this.user);
            // Por enquanto, apenas exibindo os dados no console para teste
        }
    }
});