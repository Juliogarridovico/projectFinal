<template>
  <div>
    <img
      v-if="src"
      :src="src"
      alt="Avatar"
      class="avatar image rounded-circle mb-3"
      :style="{ height: size, width: size }"
    />
    <div
      v-else
      class="avatar avatar-image no-image rounded-circle mb-3"
      :style="{ height: size, width: size }"
    />

    <div :style="{ width: size }">
      <label class=" btn-upload text-white block rounded-5 w-100 mb-3" for="single">
              {{ uploading ? "Uploading ..." : "Upload" }}
      </label>
      <input
        style="visibility: hidden; position: absolute"
        type="file"
        id="single"
        accept="image/*"
        @change="uploadAvatar"
        :disabled="uploading"
      >
    </div>
  </div>
</template>

<script>
import { ref, toRefs, watch } from "vue"
import { supabase } from "../supabase"

export default {
  props: {
    path: String,
  },
  emits: ["upload", "update:path"],
  setup(prop, { emit }) {
    const { path } = toRefs(prop)
    const size = ref("7em")
    const uploading = ref(false)
    const src = ref("")
    const files = ref()

    const downloadImage = async () => {
      try {
        const { data, error } = await supabase.storage
          .from("avatars")
          .download(path.value)
        if (error) throw error
        src.value = URL.createObjectURL(data)
      } catch (error) {
        console.error("Error downloading image: ", error.message)
      }
    }

    const uploadAvatar = async (evt) => {
      files.value = evt.target.files
      try {
        uploading.value = true
        if (!files.value || files.value.length === 0) {
          throw new Error("You must select an image to upload.")
        }

        const file = files.value[0]
        const fileExt = file.name.split(".").pop()
        const fileName = `${Math.random()}.${fileExt}`
        const filePath = `${fileName}`

        let { error: uploadError } = await supabase.storage
          .from("avatars")
          .upload(filePath, file)

        if (uploadError) throw uploadError
        emit("update:path", filePath)
        emit("upload")
      } catch (error) {
        alert(error.message)
      } finally {
        uploading.value = false
      }
    }

    watch(path, () => {
      path.value ? downloadImage() : ""
    })

    return {
      path,
      size,
      uploading,
      src,
      files,

      uploadAvatar,
    }
  },
}
</script>

<style scoped>

  img{
    width: 40px !important;
  }
  .avatar-image{
    border-radius: 100px !important;
  }

  .btn-upload {
    display: flex;
  height: 40px;
  font-size: 13px;
  background-color: #1ec49c;
  border: none;
  align-items: center;
    justify-content: center;
}

.btn-upload:hover{
  background-color: #23ad88 !important;
}
</style>
