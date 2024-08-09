<template>
    <section id="contact" class="isolate relative bg-gray-200">
        <div
            class="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 rounded-b-2xl relative px-4 pt-24 pb-16 mx-auto">
            <div class="lg:mb-16 font-rubik max-w-screen-lg mx-auto mb-8 text-center">
                <div>
                    <h1 data-aos="zoom-in" data-aos-delay="200"
                        class="bg-teal-accent-400 inline-block px-3 py-px text-xs font-semibold tracking-wider text-red-900 uppercase rounded-full">
                        Student Hotline
                    </h1>
                </div>
                <span class="relative inline-block">
                    <svg viewBox="0 0 52 24"
                        class="fill-rose-500 -left-24 text-rose-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block absolute top-0 z-0 hidden w-32 -mt-8 -ml-20">
                        <defs>
                            <pattern id="d9d7687a-355f-4502-8ec4-7945db034688" x="0" y="0" width=".185" height=".50">
                                <circle cx="1" cy="1" r=".7"></circle>
                            </pattern>
                        </defs>
                        <rect fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)" width="52" height="24">
                        </rect>
                    </svg>
                </span>
                <h1 class="mb-8 text-4xl font-bold tracking-tight text-center text-gray-800" data-aos="fade-up"
                    data-aos-duration="500">
                    Jaring Aspirasi
                </h1>
                <p class="lg:mb-16 sm:text-xl font-medium text-gray-700" data-aos="fade-up" data-aos-delay="500"
                    data-aos-duration="500">Sampaikan aspirasi demi UKM SEPAK BOLA ITS menjadi lebih berprestasi</p>
            </div>
            <div class="md:flex-nowrap flex flex-row flex-wrap gap-8">

                <div class="w-full">
                    <form action="#" @submit.prevent="addData" class="font-inter space-y-8">
                        <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">
                            <label for="name" class="block mb-2 text-base font-medium text-gray-700">Nama</label>
                            <input type="text" id="name" name="nama" v-model="rname"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-base rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5"
                                placeholder="Nama Anda" autocomplete="off" required>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">
                            <label for="email" class="block mb-2 text-base font-medium text-gray-700">E-mail</label>
                            <input type="text" id="email" name="email" v-model="remail"
                                class="bg-gray-50 focus:ring-rose-500 focus:border-rose-500 block w-full p-3 text-base text-gray-900 border border-gray-300 rounded-lg shadow-sm"
                                placeholder="emailanda@mail.com" autocomplete="off" required>
                        </div>
                        <div class="sm:col-span-2" data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">
                            <label for="message" class="block mb-2 text-base font-medium text-gray-700">Pesan</label>
                            <textarea id="message" rows="6" v-model="rmsg"
                                class="block p-2.5 w-full text-base text-gray-700 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-rose-500 focus:border-rose-500 "
                                placeholder="Isi pesan anda" autocomplete="off" name="pesan"></textarea>
                        </div>

                        <button
                            class="sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-rose-300 bg-blue-700 px-5 py-3 text-base font-medium text-center text-white transition-colors duration-300 ease-in-out rounded-lg"
                            data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">Kirim Pesan</button>
                    </form>
                    <div v-if="showSuccessPopup">
                        <div class="popup success">
                            <i class="fas fa-check-circle"></i>
                            <h2>Success!</h2>
                            <p>Data Anda telah berhasil dikirim.</p>
                            <br>
                            <button class="sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-rose-300 bg-blue-700 px-5 py-3 text-base font-medium text-center text-white transition-colors duration-300 ease-in-out rounded-lg" @click="refreshPage">Close</button>
                        </div>
                    </div>

                    <div v-if="showErrorPopup">
                        <div class="popup error">
                            <i class="fas fa-exclamation-circle"></i>
                            <h2>Error</h2>
                            <p>Terjadi kesalahan: {{ errorMessage }}</p>
                            <br>
                            <button class="sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-rose-300 bg-blue-700 px-5 py-3 text-base font-medium text-center text-white transition-colors duration-300 ease-in-out rounded-lg" @click="refreshPage">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(70%-30rem)]"
                aria-hidden="true">
                <div class="relative left-[calc(70%+3rem)] aspect-[1155/678] w-[36.125rem]  bg-gradient-to-tr from-[#9b6be9] to-[#f289fc] opacity-30 sm:left-0 sm:w-[52.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDcPPSki9vc0kT0qEuN5zr2EGfq73OM6rw",
    authDomain: "ukmsb-6c78c.firebaseapp.com",
    projectId: "ukmsb-6c78c",
    storageBucket: "ukmsb-6c78c.appspot.com",
    messagingSenderId: "881078967054",
    appId: "1:881078967054:web:2fd9157cce6e0cca16555f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {
    data() {
        return {
            remail: "",
            rname: "",
            rmsg: "",
            showSuccessPopup: false,
            showErrorPopup: false,
            errorMessage: "",
        };
    },
    methods: {
        async addData() {
            try {
                const docRef = await addDoc(collection(db, "response"), {
                    "respondent-email": this.remail,
                    "respondent-name": this.rname,
                    "msg-content": this.rmsg,
                    "timestamp": new Date(),
                });
                console.log("Document written with ID: ", docRef.id);
                this.showSuccessPopup = true; 
                this.resetForm();
            } catch (e) {
                console.error("Error adding document: ", e);
                this.showErrorPopup = true;
                this.errorMessage = e.message; 
            }
        },
        resetForm() {
            this.remail = "";
            this.rname = "";
            this.rmsg = "";
        },
        refreshPage() {
            window.location.reload();
        }
    },
};
</script>

<style scoped>
.popup {
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 10;
}

.success {
    color: green;
}

.error {
    color: red;
}

.fa-check-circle {
    color: green;
    font-size: 2em;
    margin-bottom: 10px;
}

.fa-exclamation-circle {
    color: red;
    font-size: 2em;
    margin-bottom: 10px;
}
</style>