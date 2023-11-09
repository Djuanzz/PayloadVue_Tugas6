<script>
import { ref } from "vue";

export default {
  name: "AddContact",
  data() {
    return {
      nama: ref(""),
      telp: ref(""),
      email: ref(""),
      alamat: ref(""),
      errors: ref(""),
    };
  },
  methods: {
    async addContact() {
      try {
        const req = await fetch("http://127.0.0.1:5000/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nama: this.nama,
            telp: this.telp,
            email: this.email,
            alamat: this.alamat,
          }),
        });
        const data = await req.json();
        console.log(data);
        if (req.ok) this.$router.push({ path: "/" });
        else this.errors = data.errors[0].message;
      } catch (err) {
        // console.log(err.message);
        this.errors = err.message;
      }
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="col-md-6">
      <form v-on:submit.prevent="addContact">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label fw-bold"
            >Nama</label
          >
          <input
            type="text"
            class="form-control"
            id="nama"
            v-model="nama"
            required />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label fw-bold"
            >Nomor Telepon</label
          >
          <input
            type="text"
            class="form-control"
            id="telp"
            v-model="telp"
            required />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label fw-bold"
            >Email</label
          >
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            required />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label fw-bold"
            >Alamat</label
          >
          <input
            type="alamat"
            class="form-control"
            id="alamat"
            v-model="alamat"
            required />
        </div>

        <button type="submit" class="btn btn-primary">Tambah</button>
        <a href="/" class="card-link d-block mt-2">
          &laquo; Kembali ke daftar kontak</a
        >
      </form>
    </div>
    <div v-if="errors" class="col-md-6">
      <div class="alert alert-danger" role="alert">
        {{ errors }}
        <br />
      </div>
    </div>
  </div>
</template>
