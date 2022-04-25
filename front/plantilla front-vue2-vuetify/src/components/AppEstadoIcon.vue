<template >
  <div class="text-center">

    <!-- Desactivar Estado -->
    <v-dialog
      v-model="dialog"
      width="580"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-if="estado =='Activo'"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          mdi-cancel
        </v-icon>
      </template>

      <v-card class="text-center">
        <v-card-title class=" justify-center text-h4">
          <span class="primary--text">Inhabilitar Establecimiento</span> 
        </v-card-title>

        <v-card-text class="text-h5">
          <div class="mb-4">
            <v-icon  size="100"    
            color="primary"            >
            mdi-information
            </v-icon>
          </div>
          Está seguro que desea inhabilitar el establecimiento seleccionado?
          <br><br>
          Ya no estará visible en la página web
        </v-card-text>

        <v-card-actions class="py-5">
          <v-row  class="justify-center">
            <v-col cols="12" sm="5"> 
              <v-btn
                
                block
                color="blue darken-1"
                text
                @click="dialog = false"
                >
                Cancelar
              </v-btn>
            </v-col>
            <v-col cols="12"  sm="5">
                <v-btn
                    block
                    rounded
                    cols-12
                    class="primary "
                    text
                >
                    Aceptar
                </v-btn>
            </v-col>
        </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <!-- Activar Estado -->
    <v-dialog
      v-model="dialog2"
      width="580"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-if="estado =='Inactivo'"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          mdi-checkbox-marked-circle
        </v-icon>
      </template>

      <v-card class="text-center">
        <v-card-title class=" justify-center text-h4">
          <span class="primary--text">Habilitar establecimiento</span> 
        </v-card-title>

        <v-card-text class="text-h5">
          <div class="mb-4">
            <v-icon  size="100"    
            color="primary"            >
            mdi-information
            </v-icon>
          </div>
          Está seguro que desea habilitar el establecimiento seleccionado?
          <br><br>
          Estará visible en la página web
        </v-card-text>

        <v-card-actions class="py-5">
          <!-- <v-btn
            color="primary"
            text
            @click="dialog2 = false"
          >
            I accept
          </v-btn> -->
          <v-row  class="justify-center">
            <v-col cols="12" sm="5"> 
              <v-btn
                
                block
                color="blue darken-1"
                text
                @click="dialog2 = false"
                >
                Cancelar
              </v-btn>
            </v-col>
            <v-col cols="12"  sm="5">
                  <v-btn
                  block
                  rounded
                  cols-12
                class="primary "
                text
                >
                    Continuar
                </v-btn>
            </v-col>
        </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>





<script>
  export default {

     props:{
        estado:{
            type:String,
            default:'',
            require:true
        },
        nameModal:{
           type:String,
            default:'',
            require:true
        }
    }, 

    data () {
      return {
        dialog: false,
        dialog2: false,
      }
    },
  }
</script>