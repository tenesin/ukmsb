<template>
    <!-- Home Section Start -->
    <section id="home" class="md:bg-top bg-right bg-no-repeat bg-cover"
        style="background-image: url('/album/bg-home.png')">
        <div class="font-inter lg:py-80 max-w-screen-xl px-4 py-64 mx-auto text-center">
            <h1 ref="typingText"
                class="md:text-5xl lg:text-6xl mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-100">
            </h1>
            <p class="lg:text-xl sm:px-16 lg:px-48 text-gray-50 mb-8 text-md font-normal">
                Selamat datang di klub UKM Sepak Bola ITS, di mana semangat dan prestasi bergema di setiap sudut lapangan!</p>
        </div>
        <div class="md:gap-8 md:p-8 z-[999] -bottom-16 shadow-gray-500 font-inter md:grid-cols-4 absolute inset-x-0 grid max-w-screen-xl grid-cols-2 gap-6 p-6 mx-auto bg-gray-200 rounded-lg shadow-md"
            data-aos="fade-up" data-aos-duration="1000">
            <!-- stat - start -->
            <div class="text-rose-700 flex flex-col items-center transition-all duration-500 ease-in-out">
                <div class="sm:text-2xl md:text-3xl text-xl font-bold">{{ pengurus }} +</div>
                <div class="sm:text-base text-sm font-semibold">Pengurus</div>
            </div>
            <!-- stat - end -->

            <!-- stat - start -->
            <div class="text-rose-700 flex flex-col items-center transition-all duration-500 ease-in-out">
                <div class="sm:text-2xl md:text-3xl text-xl font-bold">{{ programKerja }} +</div>
                <div class="sm:text-base text-sm font-semibold">Program Kerja</div>
            </div>

            <!-- stat - start -->
            <div class="text-rose-700 flex flex-col items-center transition-all duration-500 ease-in-out">
                <div class="sm:text-2xl md:text-3xl text-xl font-bold">{{ prestasi }} +</div>
                <div class="sm:text-base text-sm font-semibold">Prestasi</div>
            </div>
            <div class="text-rose-700 flex flex-col items-center transition-all duration-500 ease-in-out">
                <div class="sm:text-2xl md:text-3xl text-xl font-bold">{{ divisi }}</div>
                <div class="sm:text-base text-sm font-semibold">Divisi</div>
            </div>
            <!-- stat - end -->
        </div>
    </section>
    <!-- Home Section End -->
</template>

<script>
export default {
    data() {
        return {
            pengurus: 0,
            programKerja: 0,
            prestasi: 0,
            divisi: 0,
        };
    },
    mounted() {
        this.typeWriter();
        this.animateCount();
    },
    methods: {
        typeWriter() {
            const text = "UKM SEPAK BOLA ITS";
            let i = 0;
            const speed = 100; // Kecepatan mengetik (ms)
            const delay = 5000; // Jeda antara animasi (ms)
            const typingEffect = setInterval(() => {
                if (i < text.length) {
                    if (text.charAt(i) === " ") {
                        this.$refs.typingText.innerHTML += " "; // Menambah spasi
                    }
                    this.$refs.typingText.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingEffect);
                    setTimeout(() => {
                        this.$refs.typingText.innerText = " "; // Menghapus teks sebelumnya
                        i = 0;
                        this.typeWriter(); // Memulai animasi kembali setelah jeda 5 detik
                    }, delay);
                }
            }, speed);
        },
        animateCount() {
            const finalPengurus = 20;
            const finalprogramKerja = 8;
            const finalPrestasi = 5;
            const finalDivisi = 7;

            const duration = 5000;
            const steps = 100;

            const pengurusStep = finalPengurus / steps;
            const programKerjaStep = finalprogramKerja / steps;
            const prestasiStep = finalPrestasi / steps;
            const divisiStep = finalDivisi / steps;

            let countPengurus = 0;
            let countprogramKerja = 0;
            let countPrestasi = 0;
            let countDivisi = 0;

            const timer = setInterval(() => {
                countPengurus += pengurusStep;
                countprogramKerja += programKerjaStep;
                countPrestasi += prestasiStep;
                countDivisi += divisiStep;

                this.pengurus = Math.round(countPengurus);
                this.programKerja = Math.round(countprogramKerja);
                this.prestasi = Math.round(countPrestasi);
                this.divisi = Math.round(countDivisi);

                if (this.pengurus >= finalPengurus && this.programKerja >= finalprogramKerja && this.prestasi >= finalPrestasi && this.divisi >= finalDivisi) {
                    clearInterval(timer);
                }
            }, duration / steps);
        }
    }
};
</script>
