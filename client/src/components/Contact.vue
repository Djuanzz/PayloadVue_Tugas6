<script>
import { ref } from "vue";

export default {
  name: "Contact",

  data() {
    return {
      contacts: [],
      errors: ref(""),
    };
  },
  methods: {
    async getContact() {
      try {
        const res = await fetch("http://127.0.0.1:5000/api/contact");
        const data = await res.json();
        this.contacts = data.docs;
        // console.log(this.contacts);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteContact(contactId) {
      try {
        const req = await fetch(
          `http://127.0.0.1:5000/api/contact/${contactId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await req.json();
        if (req.ok) window.location.reload(true);
        // console.log(data);
      } catch (err) {
        console.log(err);
        this.errors = err.message;
      }
    },
  },

  created() {
    this.getContact();
    // console.log("aman aja");
  },
};
</script>

<template>
  <div v-if="errors" class="alert alert-danger" role="alert">
    {{ errors }}
    <br />
  </div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <!-- <th scope="col">Id</th> -->
        <th scope="col">Nama</th>
        <th scope="col">Nomor Telepon</th>
        <th scope="col">Alamat</th>
        <th scope="col">Email</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody v-if="contacts.length > 0" v-for="(contact, index) in contacts">
      <tr>
        <th scope="row">{{ index + 1 }}</th>
        <!-- <td>{{ contact.id }}</td> -->
        <td>{{ contact.nama }}</td>
        <td>{{ contact.telp }}</td>
        <td>{{ contact.alamat }}</td>
        <td>{{ contact.email }}</td>
        <td>
          <div
            @click="deleteContact(contact.id)"
            class="badge text-bg-danger m-2 btn">
            Hapus
          </div>
          <a class="badge text-bg-warning m-2" :href="'/edit/' + contact.id">
            Edit</a
          >
        </td>
      </tr>
    </tbody>
  </table>

  <a class="btn btn-primary" href="/add">Tambah kontak</a>
  <!-- <div @click="getContact" class="btn btn-primary">Lihat kontak</div> -->
</template>
