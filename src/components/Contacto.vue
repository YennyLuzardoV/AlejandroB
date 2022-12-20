<template>
    <div class="contacto">
        <v-container >
            <v-row class="d-flex">
                <v-col cols="6">
                    <p class="text-h2 mt-10">CONTACTO</p>
                    <br>
                    <br>
                    <P>500 Terry Francois Street, 6th Floor. San Francisco, CA 94158</P>
                    <p>info@mysite.com</p>
                    <p>123-456-7890</p>
                </v-col>
                <v-col cols="6">
                    <br>
                    <br>
                    <v-text-field
                        v-model="email"
                        :error-messages="emailErrors"
                        label="Email"
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                        prepend-icon="mdi-mail"
                    />
                    <v-btn>
                        ENVIAR
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
  </template>
  
  <script>
  export default {
      name: 'ContactoView',
  
      data: () => ({})
  }
  </script>

  