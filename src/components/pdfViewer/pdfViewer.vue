<template>
  <div class="pdf-viewer">
    <div id="pdf-viewer-container">
      <div id="pdf-viewer"></div>
    </div>
    <div class="error-info" v-show="error">PDF 文件加载失败</div>
  </div>
</template>

<script>
import PDFLib from 'pdfjs-dist/webpack'
import { PDFViewer } from 'pdfjs-dist/web/pdf_viewer'

let pdfViewer = null

export default {
  name: 'pdfViewer',
  mounted () {
    this.initPDFViewer()
  },
  methods: {
    initPDFViewer () {
      console.log('initPDFViewer')
      let container = this.$el.querySelector('#pdf-viewer-container')
      let viewer = this.$el.querySelector('#pdf-viewer')
      pdfViewer = new PDFViewer({
        container: container,
        viewer: viewer,
        removePageBorders: true,
        textLayerMode: 0
        // renderer: 'svg'
      })
    }
  }
}
</script>

<style lang="scss">

</style>
