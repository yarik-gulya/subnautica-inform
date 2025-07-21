<template>
    <div class="profile-page">
        <div v-if="user">
            <h1>Привіт, {{ user.name }}</h1>
            <p>Це твій профіль Subnautica-Inform.</p>
            <button @click="logout">Вийти</button>
        </div>

        <div v-else class="auth-block">
            <h2>Авторизація</h2>
            <input type="text" v-model="name" placeholder="Ім'я" required />
            <input type="email" v-model="email" placeholder="Email" required />
            <input type="password" v-model="password" placeholder="Пароль" required />
            <div class="buttons">
                <button @click="register">Реєстрація</button>
                <button @click="login">Увійти</button>
                <button @click="guestLogin">Гість</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            name: '',
            user: null
        };
    },
    mounted() {
        const saved = localStorage.getItem('user');
        if (saved) {
            this.user = JSON.parse(saved);
        }
    },
    methods: {
        register() {
            if (!this.email || !this.password || !this.name) {
                alert("Всі поля обов'язкові для заповнення!");
                return;
            }

            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const existing = users.find(u => u.email === this.email);

            if (existing) {
                alert("Користувач з таким email вже існує!");
                return;
            }

            const newUser = { email: this.email, name: this.name, password: this.password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('user', JSON.stringify(newUser));
            this.user = newUser;
        },

        login() {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const found = users.find(u =>
                u.email === this.email &&
                u.password === this.password &&
                u.name === this.name
            );

            if (found) {
                localStorage.setItem('user', JSON.stringify(found));
                this.user = found;
            } else {
                alert("Невірний email, ім'я або пароль, або такий користувач не зареєстрований.");
            }
        },

        guestLogin() {
            const guest = { name: 'Гість', email: '', password: '' };
            localStorage.setItem('user', JSON.stringify(guest));
            this.user = guest;
        },

        logout() {
            localStorage.removeItem('user');
            this.user = null;
        }
    }
};
</script>

<style scoped>
.profile-page {
    display: flex;
    justify-content: center;
    max-width: 450px;
    margin: 80px auto;
    background: rgba(24, 34, 56, 0.95);
    padding: 30px;
    border-radius: 12px;
    color: #AEEFFF;
    text-align: center;
    flex-direction: column;
}

input {
    width: 90%;
    padding: 12px;
    margin: 10px auto;
    border-radius: 8px;
    border: none;
    background: #2a3b5c;
    color: white;
}

.buttons button,
button {
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    color: white;
    background: #00BFCB;
    cursor: pointer;
}

.buttons button:hover,
button:hover {
    background: #009aa5;
}
</style>