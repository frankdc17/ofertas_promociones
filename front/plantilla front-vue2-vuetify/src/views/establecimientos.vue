nombre<template>
  <v-app>
    <v-container>
      <h1  class="primary--text"  >Lista de establecimientos</h1>
      <v-divider
          class="mb-10"
          horizontal>
      </v-divider>

      <v-data-table
        :headers="headers"
        :items="desserts"
        sort-by="calories"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar
            flat
          >
            
            <v-spacer></v-spacer>

            <v-dialog
              v-model="dialog"
              max-width="700px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  rounded
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Agregar
                </v-btn>
              </template>
              <v-card>
                <v-card-title  class="d-flex justify-center">
                  <p class="primary--text ">{{ formTitle }}</p>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-select
                          :items="['Categoria 1','Categoria 2']"
                          filled
                          rounded
                          label="Categoria"
                        ></v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                         filled
                          rounded
                          dense
                          v-model="editedItem.nombre"
                          label="Nombre"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-file-input
                          label="Logo"
                          filled
                          dense
                          rounded
                          prepend-icon=""
                          prepend-inner-icon="mdi-paperclip"
                        ></v-file-input>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-file-input
                            label="Banner"
                            filled
                            dense
                            rounded
                            prepend-icon=""
                            prepend-inner-icon="mdi-paperclip"

                          ></v-file-input>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >

                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions class="d-flex justify-center">
                  
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="close"
                  >
                    Cancelar
                  </v-btn>
                  <v-btn
                  class="px-5"
                    color="primary"
                    rounded
                    @click="save"
                  >
                    Guardar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!-- Form sucursal -->
            <v-dialog
              v-model="dialogSucursal"
              max-width="700px"
            >
             
              <v-card>
                <v-card-title  class="d-flex justify-center">
                  <p class="primary--text ">Agregar sucursales</p>
                </v-card-title>
                        <!-- cols="12"
                        sm="6"
                        md="6" -->
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-row>
                          <v-col
                            cols="12"
                           
                          >
                            <v-text-field
                            filled
                              rounded
                              dense
                              v-model="editedItem.nombre"
                              label="Nombre"
                            ></v-text-field>
                          </v-col>

                          <v-col
                            cols="12"
                          >
                            <v-select
                              :items="['municipio 1','municipio 2']"
                              filled
                              rounded
                              label="Municipio:*"
                            ></v-select>
                          </v-col>

                          <v-col
                            cols="12"
                           
                          >
                            <v-text-field
                            filled
                              rounded
                              dense
                              v-model="editedItem.nombre"
                              label="URL ubicacíon maps:*"
                            ></v-text-field>
                          </v-col>

                          
                          
                        </v-row>

                      </v-col>

                      <v-col cols="12" sm="6" md="6" >
                        <v-row>
                          <v-col
                            cols="12"
                          >
                            <v-select
                              :items="['Depto 1','Depto 2']"
                              filled
                              rounded
                              label="Departamento:*"
                            ></v-select>
                          </v-col>
                        </v-row>

                        <v-col cols="12">

                          <v-textarea
                          filled
                            rounded
                            name="input-7-4"
                            label="Dirección*"
                          ></v-textarea>
                        </v-col>


                      </v-col>
                      
                      
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        
                      </v-col>

                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >

                      </v-col>
                    </v-row>
                    <v-divider></v-divider>
                     <v-row class="d-flex align-center mt-5">
                      <v-col md="3" ></v-col>
                      <v-col md="6" >
                        <p class="primary--text text-h6 text-center">Contactos sucursales</p>
                      </v-col>
                      <v-col md="3" class="d-flex justify-end" >
                        <v-btn style="" rounded class="primary"> 
                        Agregar
                        </v-btn>
                      </v-col>
                       
                      </v-row> 

                      <v-row class="d-flex justify-center">
                        <v-col cols="4">
                          <v-btn
                            class="mx-2"
                            fab
                            dark
                            small
                            color="primary"
                          >
                            <v-icon dark>
                              mdi-plus
                            </v-icon>
                          </v-btn>

                          <span class="text-subtitle-1">Agregar sucursal</span>

                        </v-col>
                      </v-row>

                      <v-data-table
                        :headers="headersSucursal"
                        :items="sucursales"
                        sort-by="calories"
                        class="elevation-1 mt-6"
                      >

                      <template v-slot:item.actions="{ item }">

                        <v-icon
                          color="primary"
                          class="mr-2"
                          @click="editItem(item)"
                        >
                          mdi-eye
                        </v-icon>

                        <v-icon
                          color="red"
                          class="mr-2"
                          @click="editItem(item)"
                        >
                          mdi-trash-can-outline
                        </v-icon>


                        

                      </template>

                     </v-data-table>
                      


                  </v-container>
                </v-card-text>

                <v-card-actions class="d-flex justify-center">
                  
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialogSucursal=false"
                  >
                    Cancelar
                  </v-btn>
                  <v-btn
                  class="px-5"
                    color="primary"
                    rounded
                    @click="save"
                  >
                    Guardar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!-- FIN -->
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-row>
            <v-col cols="1">
              <v-icon
                color="primary"
                class="mr-2"
                @click="editItem(item)"
              >
                mdi-eye
              </v-icon>
            </v-col>

            <v-col cols="1" v-if="item.estado=='Activo'">
              <v-icon
                color="primary"
                class="mr-2"
                @click="dialogSucursal=true"
              >
                mdi-home-variant
              </v-icon>
            </v-col>

            <v-col cols="1" v-if="item.estado=='Activo'">
              <v-icon
              color="primary"
              class="mr-2"
              @click="editItem(item)"
            >
              mdi-pencil
              </v-icon>
            </v-col>
            <v-col cols="1">
              <AppEstadoIcon :estado="item.estado" ></AppEstadoIcon>
            </v-col>
            
          </v-row>          
        </template>

        <template v-slot:item.estado="{ item }">
            <v-chip
              label
              outlined
            v-if="item.estado=='Activo'"
            class="ma-2"
            color="green"

          >
            {{item.estado}}
          </v-chip>
          <v-chip
            label
            outlined
            v-if="item.estado=='Inactivo'"
            class="ma-2"
            color="red"
          >
            {{item.estado}}
          </v-chip>
        </template>
        
        <template v-slot:no-data>
          <v-btn
            color="primary"
            @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
    </v-container>
  </v-app>

</template>

<script>
import AppEstadoIcon from "../components/AppEstadoIcon.vue";

  export default {
    components: {
    AppEstadoIcon,
    },
    data: () => ({
      dialog: false,
      dialogSucursal: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Nombre',
          align: 'start',
          sortable: false,
          value: 'nombre',
          class : 'primary--text'
        },
        { text: 'Categoria', value: 'categoria' },
        { text: 'Estado', value: 'estado' },
        { text: 'Opciones', value: 'actions', sortable: false },
      ],

      headersSucursal: [
        {
          text: 'Nombre',
          align: 'start',
          sortable: false,
          value: 'nombre',
          class : 'primary--text'
        },
        { text: 'Departamento', value: 'departamento' },
        { text: 'Municipio', value: 'municipio' },
        { text: 'Dirección', value: 'direccion' },
        { text: 'Opciones', value: 'actions', sortable: false },
      ],
      desserts: [],
      sucursales: [],
      editedIndex: -1,
      editedItem: {
        nombre: '',
        categoria: '',
      },
      defaultItem: {
        nombre: '',
        categoria: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Crear establecimiento' : 'Editar establecimiento'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            nombre: 'Establecimiento 1',
            categoria: 'Categoria 1',
            estado : 'Activo'
          },
          {
            nombre: 'Establecimiento 2',
            categoria: 'Categoria 2',
            estado : 'Inactivo'
          }
          
        ],
        this.sucursales = [
          {
            nombre: 'Establecimiento 1',
            departamento: 'Depto 1',
            municipio : 'municipio 1',
            direccion : 'www...'
          }
          
        ]


      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>